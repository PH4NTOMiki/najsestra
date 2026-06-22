<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    // data.nominations and data.stories are now available to loop through
</script>

<div class="p-4">
    <h2 class="font-bold">Ukupno nominacija: {data.nominations.length}</h2>
</div>