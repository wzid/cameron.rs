<script>
    export let href;
    export let icon_class;
    export let col_span;
    export let extra_classes;
</script>

<div class="group col-span-{col_span} w-full h-full">
    <a href={href} target="_blank" rel="noopener noreferrer" class="{extra_classes} backdrop-blur-2xl flex h-full items-center justify-center rounded-2xl text-5xl transform-gpu transition-all duration-500 will-change-[outline,_transform] group-hover:scale-95 active:scale-100">
        <span class="transform-gpu transition duration-500 group-hover:scale-[1.3]">
            <i class={icon_class}></i>
        </span>
    </a>
</div>