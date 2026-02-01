import { ApiResponse } from '../types';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxn-1dnjmKu5oaiot--7KJAnmcNHlOyf4GHZBGt2p_4wtVklJSJFNMG6RReNic8SiawJg/exec'; 

export const submitToGoogleSheets = async (data: Record<string, string>): Promise<ApiResponse> => {
  try {
    // CORRECCIÓN CRÍTICA: Se eliminó "const response =" antes del await.
    // Esto evita el error TS6133 que bloqueaba la subida a Vercel.
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', 
      headers: {
        'Content-Type': 'text/plain;charset=utf-8', 
      },
      body: JSON.stringify(data),
    });

    return {
      status: 'success',
      message: '¡Inscripción enviada correctamente!'
    };
  } catch (error) {
    console.error("Error al enviar:", error);
    return {
      status: 'error',
      message: 'Error de conexión. Intenta nuevamente.'
    };
  }
};

export const fetchCoursesFromSheet = async (): Promise<string[]> => {
  try {
    const cacheBuster = new Date().getTime();
    const urlWithCacheBuster = `${GOOGLE_SCRIPT_URL}?t=${cacheBuster}`;

    const response = await fetch(urlWithCacheBuster, {
      method: 'GET'
    });
    
    const data = await response.json();
    if (data.status === 'success' && data.courses) {
      return data.courses;
    }
    return [];
  } catch (error) {
    console.error("Error cargando cursos:", error);
    return [];
  }
};