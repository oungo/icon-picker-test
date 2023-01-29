import { useEffect, useState } from "react";
import IconList from "./IconList";

export default function IconsAi() {
  const [iconModule, setIconModule] = useState({});

  useEffect(() => {
    const loadIcons = async () => {
      const icons = await import("react-icons/ai");
      setIconModule(icons);
    };

    loadIcons();
  }, []);

  return <IconList icons={iconModule} />;
}
