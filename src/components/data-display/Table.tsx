import { ReactNode } from "react";

export interface TableColumn<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  keyExtractor: (item: T) => string | number;
}

export function Table<T>({ data, columns, keyExtractor }: TableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-white/[0.06]">
      <table className="w-full">
        <thead className="bg-white/[0.04] border-b border-white/[0.06]">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-canvas/70"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.04]">
          {data.map((item) => (
            <tr
              key={keyExtractor(item)}
              className="hover:bg-white/[0.02] transition-colors"
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className="px-4 py-3 font-mono text-sm text-canvas"
                >
                  {column.render
                    ? column.render(item)
                    : String(item[column.key as keyof T])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
