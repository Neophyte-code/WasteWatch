@if($errors->any())
<p class="text-red-500 text-xs text-center font-bold mt-5 mb-5">
    {{ $errors->first() }}
</p>
@endif