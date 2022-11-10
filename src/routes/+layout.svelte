<script>
    import "../app.postcss";
    import "../app.css";
    import Footer from "$lib/Footer.svelte";
    let scroll = true;
</script>
<main class:scroll-lock={scroll} class="flex flex-col flex-wrap h-full w-full justify-between">
<slot></slot>
<Footer />
</main>