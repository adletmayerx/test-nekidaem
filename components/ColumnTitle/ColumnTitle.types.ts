type Props = {
  title: ColumnType;
};

type ColumnType = "on-hold" | "in-progress" | "needs-review" | "approved";

export type { Props, ColumnType };
