import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let req = request;
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) =>{
        if (err.status === 404) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Pokemon no encontrado!',
          })
          this.router.navigateByUrl('/home');
        }
        return throwError(() => new Error('Error en la peticion'))
      })
    );
  }
}
