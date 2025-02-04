
import { handleFocusChange, handleInputChange, processPayment} from "../PaymentForms";


// PaymentInfo.jsx
const PaymentInfo = () => {
	return <div class="space-y-4">
	<form>
	<div class="w-full p-2 bg-kaya-dark brutalist-border focus:outline-none">
		<label for="number">Número de la tarjeta</label>
		<input
			type="text"
			name="number"
			id="number"
			maxlength="16"
			class="form-control"
			onchange={handleInputChange}
			onfocus={handleFocusChange}
		/>
	</div>
	<div class="w-full p-2 bg-kaya-dark brutalist-border focus:outline-none">
		<label for="name">Nombre</label>
		<input
			type="text"
			name="name"
			id="name"
			maxlength="30"
			class="form-control"
			onchange={handleInputChange}
			onfocus={handleFocusChange}
		/>
	</div>
	<div class="form-row">
		<div class="w-full p-2 bg-kaya-dark brutalist-border focus:outline-none">
			<label for="expiry">Fecha de expiración</label>
			<input
				type="text"
				name="expiry"
				id="expiry"
				maxlength="4"
				class="form-control"
				onchange={handleInputChange}
				onfocus={handleFocusChange}
			/>
		</div>
		<div class="w-full p-2 bg-kaya-dark brutalist-border focus:outline-none">
			<label for="cvc">CVC</label>
			<input
				type="text"
				name="cvc"
				id="cvc"
				maxlength="4"
				class="form-control"
				onchange={handleInputChange}
				onfocus={handleFocusChange}
			/>
		</div>
	</div>
	<button onclick={processPayment} type="button" class="btn btn-success btn-block btn-lg">Pagar</button>
	</form>
	</div>;
  };
  
  export default PaymentInfo; // ¡Esta línea es clave!
