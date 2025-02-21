import { IAppRoute } from "@Models/components.types";

export const APP_NAME = 'Project Spyhnx'

export const APP_ROUTES: IAppRoute[] = [
  { path: 'dashboard',        title: 'Dashboard',       includeInNav: false, placement: { position: 'top', sortOrder: 1 },     icon: 'home', default: true },
  { path: 'taskboard',        title: 'Taskboard',       includeInNav: true, placement: { position: 'top', sortOrder: 1.2 },   icon: 'calendar_month' },
  { path: 'planner',          title: 'Planner',         includeInNav: false, placement: { position: 'top', sortOrder: 1.5 },   icon: 'calendar_month' },
  { path: 'trainer',          title: 'Trainer',         includeInNav: false, placement: { position: 'top', sortOrder: 2 },     icon: 'fitness_center' },
  { path: 'languages',        title: 'Languages',       includeInNav: false, placement: { position: 'top', sortOrder: 3 },     icon: 'language' },
  { path: 'tabletop',         title: 'Tabletop',        includeInNav: false, placement: { position: 'top', sortOrder: 4 },     icon: 'sports_esports' },
  { path: 'todo',             title: 'To-do',           includeInNav: false, placement: { position: 'top', sortOrder: 5 },     icon: 'lists' },
  { path: 'markdown',         title: 'Markdown',        includeInNav: false, placement: { position: 'top', sortOrder: 6 },     icon: 'lists' },
  { path: 'profile',          title: 'Profile',         includeInNav: false, placement: { position: 'bottom', sortOrder: 1 },  icon: 'account_circle' },
  { path: 'dev',              title: 'Dev Tools',       includeInNav: true, placement: { position: 'bottom', sortOrder: 2 },  icon: 'code' }
];
