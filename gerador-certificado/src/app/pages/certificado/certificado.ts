import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado.service';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css',
})
export class Certificado implements OnInit {
  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    console.log(this.certificadoService.certificados);
  }
}
