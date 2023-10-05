import { TestBed } from "@angular/core/testing";

import { NomeDoServicoService } from "./nome-do-servico.service";

describe("NomeDoServicoService", () => {
  let service: NomeDoServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomeDoServicoService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
