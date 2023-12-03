import { TestBed } from '@angular/core/testing';
import { AdminGuard } from './admin.guard';
import { AuthService } from 'src/app/services/auth-service.service'; // Asegúrate de que la ruta sea correcta
import { Storage } from '@ionic/storage-angular'; // Asegúrate de que la ruta sea correcta

describe('AdminGuard', () => {
  let guard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdminGuard,
        AuthService,
        Storage // Asegúrate de que todos estos servicios estén disponibles
      ]
    });
    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
