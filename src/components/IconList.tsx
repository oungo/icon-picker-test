interface Props {
  icons: object;
}

export default function IconList({ icons }: Props) {
  return (
    <>
      {Object.values(icons).map((Icon: any, index) => (
        <Icon key={index} />
      ))}
    </>
  );
}
