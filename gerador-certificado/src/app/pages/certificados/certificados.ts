import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ItemCertificado } from '../../_components/item-certificado/item-certificado';
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado.service';
import { ICertificado } from '../../interfaces/icertificado';

@Component({
  selector: 'app-certificados',
  imports: [SecondaryButton, ItemCertificado, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})
export class Certificados implements OnInit {
  certificados: ICertificado[] = [];

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados;
    console.log(this.certificados);
  }
}
