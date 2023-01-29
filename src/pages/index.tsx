import IconPicker, { ThemeEnum } from "@/components/IconPicker";

export default function Home() {
  return (
    <div className="w-80">
      <input className="block w-full box-border" />
      <div className="mt-5 w-full">
        <IconPicker cols={12} gap={1} theme={ThemeEnum.BS} />
      </div>
    </div>
  );
}
