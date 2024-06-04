import { create } from "zustand";
import { ReactNode, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

// Backdrop state

type State = {
  isVisible: boolean;
};

type Actions = {
  show: () => void;
  hide: () => void;
};

const useBackdropState = create<State & Actions>()((set) => ({
  isVisible: false,
  show: () => set(() => ({ isVisible: true })),
  hide: () => set({ isVisible: false }),
}));

// Provider

export const PopupMenuProvider = () => {
  const state = useBackdropState();

  if (state.isVisible)
    return <Pressable style={styles.backdropContainer} onPress={state.hide} />;

  return <></>;
};

// External hook

type PopupMenuItemProps = {
  title: string;
  icon: ReactNode;
  onPress: () => void;
};

const usePopupMenu = (items: PopupMenuItemProps[]) => {
  const [isVisible, setIsVisible] = useState(false);
  const backdrop = useBackdropState();

  useEffect(() => {
    if (!backdrop.isVisible) {
      setIsVisible(false);
    }
  }, [backdrop.isVisible]);

  const render = () => (
    <View style={styles.menuRoot}>
      <Pressable style={styles.menuContainer}>
        {items.map((item, index) => (
          <Pressable
            key={index}
            style={styles.menuItem}
            onPress={() => {
              backdrop.hide(), item.onPress();
            }}
          >
            {item.icon}
            <Text>{item.title}</Text>
          </Pressable>
        ))}
      </Pressable>
    </View>
  );

  return {
    show: () => {
      backdrop.show();
      setIsVisible(true);
    },
    render: isVisible ? render : () => <></>,
  };
};

const styles = StyleSheet.create({
  backdropContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(1,1,1,0.2)",
  },
  menuRoot: {
    position: "relative",
    backgroundColor: "yellow",
    zIndex: 1,
  },
  menuContainer: {
    position: "absolute",
    backgroundColor: "lime",
  },
  menuItem: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
});

export default usePopupMenu;
