import type { ColumnType } from "../ColumnTitle/ColumnTitle.types";

type Props = {
  items: Array<Item>;
  type: ColumnType;
};

type Item = {
  id: string;
  text: string;
};

export type { Props };
