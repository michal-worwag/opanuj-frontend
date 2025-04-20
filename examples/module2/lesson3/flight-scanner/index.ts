import { formSchema } from './form-schema';

const form = document.querySelector('#flight-form') as HTMLFormElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  formSchema.parse(formSchema, {
    origin: formData.get('origin') as string,
    destination: formData.get('destination') as string,
    trip: formData.get('trip') as string,
    startDate: formData.get('startDate') as string,
    endDate: formData.get('endDate') as string,
  });
});
