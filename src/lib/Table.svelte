<script lang="ts" generics="TData extends Record<string, unknown>">
	import { type BaseTableProps } from './index.js';
	let { data, emptyState, headerMap }: BaseTableProps<TData> = $props();
	let columns = data.length > 0 ? Object.keys(data[0]).map((key) => ({ header: key })) : [];
</script>

<table>
	<thead>
		<tr>
			{#if !headerMap}
				{#each columns as column}
					<th>{column.header}</th>
				{/each}
			{:else}
				{#each columns as key}
					{@const header = headerMap[key.header] ?? key.header}
					{#if typeof header === 'string'}
						<th>{header}</th>
					{:else}
						<th>{header(data)}</th>
					{/if}
				{/each}
			{/if}
		</tr>
	</thead>
	<tbody>
		{#if data.length === 0}
			{#if emptyState}
				{@render emptyState()}
			{:else}
				<tr>
					<td colspan={columns.length}>No data</td>
				</tr>
			{/if}
		{:else}
			{#each data as row}
				<tr>
					{#each Object.keys(row) as key}
						<td>{row[key]}</td>
					{/each}
				</tr>
			{/each}
		{/if}
	</tbody>
</table>
