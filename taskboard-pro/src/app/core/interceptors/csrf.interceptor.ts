import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**
 * Interceptor CSRF qui ajoute automatiquement le token CSRF aux requêtes
 * Le token est récupéré depuis un cookie (par défaut 'XSRF-TOKEN')
 */
export const csrfInterceptor: HttpInterceptorFn = (req, next) => {
  const document = inject(DOCUMENT);
  
  // Récupérer le token CSRF depuis le cookie
  const csrfToken = getCookie('XSRF-TOKEN', document);
  
  // Ajouter le token uniquement pour les méthodes qui modifient les données
  if (csrfToken && shouldAddCsrfToken(req.method)) {
    // Cloner la requête et ajouter le header CSRF
    const clonedReq = req.clone({
      setHeaders: {
        'X-XSRF-TOKEN': csrfToken
      }
    });
    return next(clonedReq);
  }
  
  return next(req);
};

/**
 * Vérifie si le token CSRF doit être ajouté selon la méthode HTTP
 */
function shouldAddCsrfToken(method: string): boolean {
  const methodsRequiringCsrf = ['POST', 'PUT', 'PATCH', 'DELETE'];
  return methodsRequiringCsrf.includes(method.toUpperCase());
}

/**
 * Récupère la valeur d'un cookie par son nom
 */
function getCookie(name: string, document: Document): string | null {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  
  return null;
}
