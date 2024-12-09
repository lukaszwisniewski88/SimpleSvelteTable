import type { Snippet } from 'svelte';

export interface BaseTableProps<
	TData extends Record<string, unknown>,
	KeyType extends keyof TData
> {
	data: TData[];
	id_key?: KeyType;
	actions?: Action<TData[KeyType]>[];
	emptyState?: Snippet;
	headerMap?: Partial<Record<keyof TData, ((original: TData[]) => string) | string>>;
}

export interface Action<IDType> {
	label: string;
	type?: 'button' | 'link';
	handler?: (id: IDType) => void;
	component?: Snippet<[id: IDType]>;
	url?: string;
}

export interface BaseColumnDefinition<TData> {
	key: keyof TData;
	header: string | ((input?: unknown) => string);
	cell: (data: TData) => Snippet | string;
}

export { default as Table } from './Table.svelte';
