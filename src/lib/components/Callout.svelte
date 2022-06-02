<script>
	export let icon;
	var alertClass;
	$: switch (icon) {
		case 'info':
			icon =
				'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
			alertClass = '';
			break;
		case 'infocolor':
			icon =
				'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
			alertClass = 'alert-info';
			break;
		case 'success':
			icon =
				'<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-8 w-8" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
			alertClass = 'alert-success';
			break;
		case 'warning':
			icon =
				'<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-8 w-8" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>';
			alertClass = 'alert-warning';
			break;
		case 'error':
			icon =
				'<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-8 w-8" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
			alertClass = 'alert-error';
			break;
		default:
			icon =
				'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
	}
</script>

<div class="alert {alertClass} shadow-lg">
	<div>
		{@html icon}
		<span><slot /></span>
	</div>
</div>
