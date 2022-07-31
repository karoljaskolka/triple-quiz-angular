import {
  SpectatorHttp,
  createHttpFactory,
  HttpMethod,
} from '@ngneat/spectator';
import { environment } from '../../../environments/environment';
import { ResourceService } from './resource.service';

const apiUrl = environment.apiUrl;

describe('ResourceService', () => {
  let spec: SpectatorHttp<ResourceService>;
  const createHttp = createHttpFactory(ResourceService);

  beforeEach(() => (spec = createHttp()));

  it('should send GET request to /api/entities/123', () => {
    spec.service.getSingleResource('entities', '123').subscribe();
    spec.expectOne(apiUrl + '/api/entities/123', HttpMethod.GET);
  });

  it('should send GET request to /api/entities?page=1&perPage=5', () => {
    spec.service
      .getResources('entities', { page: '1', perPage: '5' })
      .subscribe();
    spec.expectOne(apiUrl + '/api/entities?page=1&perPage=5', HttpMethod.GET);
  });

  it('should send POST request to /api/entities with request body', () => {
    spec.service.postResource('entities', { name: 'create' }).subscribe();
    const req = spec.expectOne(apiUrl + '/api/entities', HttpMethod.POST);
    expect(req.request.body['name']).toEqual('create');
  });

  it('should send PUT request to /api/entities/123 with request body', () => {
    spec.service.putResource('entities', '123', { name: 'update' }).subscribe();
    const req = spec.expectOne(apiUrl + '/api/entities/123', HttpMethod.PUT);
    expect(req.request.body['name']).toEqual('update');
  });

  it('should send DELETE request to /api/entities/123', () => {
    spec.service.deleteResource('entities', '123').subscribe();
    spec.expectOne(apiUrl + '/api/entities/123', HttpMethod.DELETE);
  });
});
