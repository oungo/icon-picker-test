import * as IconsAi from "react-icons/ai";
import * as IconsBs from "react-icons/bs";
import IconList from "./IconList";

export enum ThemeEnum {
  AI = "ai",
  BS = "bs",
  BI = "bi",
  CI = "ci",
  DI = "di",
  FI = "fi",
  FC = "fc",
  FA = "fa",
  GI = "gi",
  GO = "go",
  GR = "gr",
  HI = "hi",
  HI2 = "hi2",
  IM = "im",
  IO = "io",
  IO5 = "io5",
  MD = "md",
  RX = "rx",
  RI = "ri",
  SI = "si",
  SL = "sl",
  TB = "tb",
  TFI = "tfi",
  VSC = "vsc",
  WI = "wi",
  CG = "cg",
}

const colVariants: { [key: string]: string } = {
  grid1: "grid1",
  grid2: "grid2",
  grid3: "grid3",
  grid4: "grid4",
  grid5: "grid5",
  grid6: "grid6",
  grid7: "grid7",
  grid8: "grid8",
  grid9: "grid9",
  grid10: "grid10",
  grid11: "grid11",
  grid12: "grid12",
  grid13: "grid13",
  grid14: "grid14",
  grid15: "grid15",
  grid16: "grid16",
  grid17: "grid17",
  grid18: "grid18",
  grid19: "grid19",
  grid20: "grid20",
};

const gapVariants: { [key: string]: string } = {
  gap1: "gap-1",
  gap2: "gap-2",
  gap3: "gap-3",
  gap4: "gap-4",
  gap5: "gap-5",
};

const renderIconsByTheme = (theme: ThemeEnum) => {
  switch (theme) {
    case ThemeEnum.AI:
      return <IconList icons={IconsAi} />;
    case ThemeEnum.BS:
      return <IconList icons={IconsBs} />;
    default:
      return null;
  }
};

interface Props {
  cols?: number;
  gap?: number;
  theme: ThemeEnum;
}

export default function IconPicker({ cols = 12, gap = 1, theme }: Props) {
  return (
    <div
      className={`grid ${colVariants[`grid${cols}`]} ${
        gapVariants[`gap${gap}`]
      } justify-items-center`}
    >
      {renderIconsByTheme(theme)}
    </div>
  );
}
