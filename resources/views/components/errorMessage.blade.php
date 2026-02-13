@if($errors->any())
<p class="text-red-500 text-xs text-center font-bold mb-5">
    {{ $errors->first() }}
</p>
@endif
@if(session('error'))
<p class="text-red-500 text-xs text-center font-bold mb-5">{{ session('error') }}</p>
@endif