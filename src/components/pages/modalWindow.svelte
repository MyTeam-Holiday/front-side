<script>
  export let showModal;
  export let modalTitle;

  let dialog;

  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <div
    on:click|stopPropagation
    class="dialog-container"
    role="button"
    tabindex=""
  >
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div>
      <div class="modal-header">
        <h5 class="modal-title">{modalTitle}</h5>
        <button
          type="button"
          class="btn-close"
          on:click={() => dialog.close()}
        />
      </div>
      <div class="modal-body">
        <slot />
      </div>

      <!-- <slot name="header" /> -->
      <!-- <slot /> -->
      <!-- svelte-ignore a11y-autofocus -->
    </div>
  </div>
</dialog>

<style>
  dialog {
    border-radius: 0.2em;
    border: none;
    padding: 0;
    margin: auto;
    width: 30%;
    height: 50%;
  }
  .dialog-container {
    height: 100%;
  }
  .btn-close {
    cursor: pointer;
  }
  .btn-close:focus {
    box-shadow: none;
    opacity: 1;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  dialog > div {
    padding: 1em;
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  button {
    display: block;
  }
</style>
