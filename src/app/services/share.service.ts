import { Injectable } from '@angular/core';
import { CONFIGURATION } from '../../config/config';
import { Share } from '../models/share';

@Injectable({
	providedIn: 'root'
})
export class ShareService {
	public share: Share[] = CONFIGURATION.share;
}
