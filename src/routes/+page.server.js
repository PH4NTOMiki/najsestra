import { db } from '$lib/server/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    // Fetch data from the new NajSestra tables
    const { data: nominations, error: nomError } = await db
        .from('nurse_nominations')
        .select('*');

    const { data: stories, error: storyError } = await db
        .from('nurse_stories')
        .select('*');

    if (nomError || storyError) {
        console.error("Database Error:", nomError || storyError);
        // Throwing a proper SvelteKit error prevents the frontend from silently failing
        throw error(500, 'Greška pri učitavanju podataka s baze.'); 
    }

    // Return the data directly; SvelteKit will serialize it and pass it to +page.svelte
    return {
        nominations: nominations ?? [],
        stories: stories ?? []
    };
}