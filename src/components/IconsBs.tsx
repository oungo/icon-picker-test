import { useEffect, useState } from "react";
import IconList from "./IconList";

export default function IconsBs() {
  const [iconModule, setIconModule] = useState({});

  useEffect(() => {
    const loadIcons = async () => {
      const icons = await import("react-icons/bs");
      setIconModule(icons);
    };

    loadIcons();
  }, []);

  return <IconList icons={iconModule} />;
}
