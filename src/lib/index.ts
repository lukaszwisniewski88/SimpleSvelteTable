import type { Snippet } from 'svelte';

// Reexport your entry components here
export interface BaseTableProps<TData extends Record<string, unknown>> {
	data: TData[];
	emptyState?: Snippet;
	headerMap?: Partial<Record<keyof TData, ((original: TData[]) => string) | string>>;
}

export interface BaseColumnDefinition<TData> {
	key: keyof TData;
	header: string | ((input?: unknown) => string);
	cell: (data: TData) => Snippet | string;
}

export { default as Table } from './Table.svelte';
