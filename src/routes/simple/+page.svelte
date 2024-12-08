<script lang="ts">
	import Table from '$lib/Table.svelte';
	const data = [
		{
			id: 1,
			name: 'John Doe',
			age: 30,
			role: 'Admin'
		},
		{
			id: 2,
			name: 'Jane Doe',
			age: 25
		},
		{
			id: 3,
			name: 'John Smith',
			age: 40,
			role: 'User'
		}
	];
</script>

<Table
	{data}
	headerMap={{
		name: 'Full Name'
	}}
></Table>

<Table data={[]} />
