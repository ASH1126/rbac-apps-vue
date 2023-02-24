<template>
  <div class="form-group">
    <label :for="name">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :min="min"
      :max="max"
      :value="modelValue"
      :autocomplete="name + '-new'"
      @input="$emit('update:modelValue', $event.target.value)"
      class="form-control"
      :autofocus="autofocus"
    />
    <div class="invalid-feedback">{{ help }}</div>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    id: String,
    name: String,
    type: String,
    label: String,
    placeholder: String,
    required: String,
    min: String,
    max: String,
    modelValue: [Number, String],
    help: String,
    autofocus: String,
  },
};
</script>
