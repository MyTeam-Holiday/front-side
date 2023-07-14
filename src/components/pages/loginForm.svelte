<script>
  import { User } from '../../stores/userStore';
  import {
    useForm,
    validators,
    HintGroup,
    Hint,
    required,
    minLength,
  } from 'svelte-use-form';

  let disabled = false;
  const form = useForm({
    login: { initial: '', validators: [required, minLength(8)] },
    password: { initial: '', validators: [required, minLength(8)] },
  });
  function loginAsync() {
    disabled = true;
    User.signIn({ isAuthenticated: true, login: $form.login.value });
  }
</script>

<div class="form-container">
  <form use:form>
    <div class="row">
      <label for="login">Login:</label>
      <input
        bind:value={$form.login.value}
        type="text"
        id="login"
        name="login"
        class="form-control"
      />
      <HintGroup>
        <Hint for="login" on="required">This is a mandatory field</Hint>
        <Hint for="login" on="minLength">Min Length is 8</Hint>
      </HintGroup>
    </div>
    <div class="row">
      <label for="password">Password:</label>
      <input
        bind:value={$form.password.value}
        type="password"
        id="password"
        name="password"
        class="form-control"
      />
      <HintGroup>
        <Hint for="password" on="required">This is a mandatory field</Hint>
        <Hint for="password" on="minLength">Min Length is 8</Hint>
      </HintGroup>
    </div>
    <div class="row">
      <button
        class="btn btn-primary"
        type="button"
        disabled={!$form.valid || disabled}
        on:click={loginAsync}>log</button
      >
    </div>
  </form>
</div>

<!-- {#await promise}
  <p>...waiting</p>
{:then users}
   {#each users as {login, url} (login) }
    <h3>{login}</h3>
    <img height="100" src={ genericAvatar }	alt={ login } use:fetchAvatar={ url }/>
  {/each} -->
<!-- {:catch error}
  <p style="color: red">{error.message}</p>
{/await} -->

<style>
  .row {
    padding: 10px;
  }
</style>
