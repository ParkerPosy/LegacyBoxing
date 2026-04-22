import { businessSchema } from '../scripts/jsonld/business';
import { breadcrumb } from '../scripts/jsonld/breadcrumb';
import { SITE_URL, organization } from '../scripts/jsonld/shared';
import type { VideoObject } from '../scripts/jsonld/types';

const videos: VideoObject[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Legacy Boxing & Combat Sports Academy – Gym Introduction',
    description:
      'A look inside Legacy Boxing & Combat Sports Academy in State College, PA. See the training space, equipment, and atmosphere at the premier boxing and MMA gym near Penn State.',
    thumbnailUrl: `${SITE_URL}/legacy-boxing_coach-derek-roth-penn-state-boxer-corner-ropes.webp`,
    uploadDate: '2024-06-01',
    contentUrl: `${SITE_URL}/entry-video.mp4`,
    publisher: organization,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Legacy Boxing – Training at State College\'s Top Boxing Gym',
    description:
      'Training footage from Legacy Boxing & Combat Sports Academy in State College, PA. Watch our athletes and coaches in action during boxing and MMA classes near Penn State.',
    thumbnailUrl: `${SITE_URL}/legacy-boxing-combat-sports-academy_adult-boxing-class-photo.webp`,
    uploadDate: '2024-08-01',
    contentUrl: `${SITE_URL}/advertising-video.mp4`,
    publisher: organization,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Boxing Conditioning Workout – Coach Roth & Athletes at Legacy Boxing',
    description:
      'Coach Derek Roth leads a boxing conditioning workout at Legacy Boxing & Combat Sports Academy. See the intensity and structure of our training in State College, PA.',
    thumbnailUrl: `${SITE_URL}/legacy-boxing_battle-ropes-intense-training-session.webp`,
    uploadDate: '2024-10-01',
    contentUrl: `${SITE_URL}/legacy-boxing-combat-sports-academy_anthony-coach-roth-boxing-conditioning-workout.mp4`,
    publisher: organization,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Legacy Boxing & Combat Sports Academy – State College PA',
    description:
      'Highlights from Legacy Boxing & Combat Sports Academy — boxing classes, MMA training, youth programs, and private coaching in State College, PA near Penn State University.',
    thumbnailUrl: `${SITE_URL}/legacy-boxing_mitt-and-body-pad-training-session.webp`,
    uploadDate: '2025-01-01',
    contentUrl: `${SITE_URL}/advertising-video2.mp4`,
    publisher: organization,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Train at Legacy Boxing – Boxing & MMA Gym Near Penn State',
    description:
      'See why Legacy Boxing & Combat Sports Academy is the top boxing and MMA gym in State College. USA Boxing certified coaches, youth programs, and flexible membership options. First class free.',
    thumbnailUrl: `${SITE_URL}/legacy-boxing-combat-sports-academy_team-group-photo.webp`,
    uploadDate: '2025-03-01',
    contentUrl: `${SITE_URL}/advertising-video3.mp4`,
    publisher: organization,
  },
];

export const schemas = [
  businessSchema,
  breadcrumb([
    { name: 'Home', url: SITE_URL },
    { name: 'Photos & Videos', url: `${SITE_URL}/pages/gallery/` },
  ]),
  ...videos,
];
