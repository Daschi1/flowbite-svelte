<script lang="ts">
  export let size = '20';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  export let ariaLabel = 'chevron up';
  export let role = 'img';

  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path clip-rule="evenodd" fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" stroke="${color}"></path>`;
  let svgsolid = `<path clip-rule="evenodd" fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" fill="${color}"></path>`;
  $: switch (variation) {
    case 'outline':
      svgpath = svgoutline;
      viewBox = '0 0 20 20';
      break;
    case 'solid':
      svgpath = svgsolid;
      viewBox = '0 0 20 20';
      break;
    default:
      svgpath = svgoutline;
      viewBox = '0 0 20 20';
  }
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={$$props.class}
  {...$$restProps}
  aria-label={ariaLabel}
  fill="none"
  {viewBox}
  {role}
  stroke-width="2"
  on:click>
  {@html svgpath}
</svg>

<!--
  @component
  ## Props
  @prop size = '20';
  @prop color = 'currentColor';
  @prop variation: 'solid' | 'outline' = 'outline';
  @prop ariaLabel = 'chevron up';
  ## Event
  - on:click
-->
