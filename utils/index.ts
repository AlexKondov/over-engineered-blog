export const isDeviceMobile = (device: string): boolean =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(device);

export const perPage = 15;

export const apiUrl = 'https://api.thesavagemind.com/wp-json/wp/v2';
