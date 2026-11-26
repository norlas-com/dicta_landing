// Browser side of the visit timer: one read/record/save per page load, shared
// by RecPill and VisitRecap (whichever script runs first does the work).
// Everything stays in this tab's sessionStorage; nothing is sent anywhere.
import { loadVisit, recordPage, saveVisit, type VisitState } from "../../lib/visit";
import type { VisitTopic } from "../../i18n/pages/meeting-ui";

export interface OpenVisit {
  state: VisitState;
  /** false when the visit could not be saved (sessionStorage blocked, or a
   *  write that failed, e.g. quota): the timer then runs from page load, and
   *  the visit recap stays hidden rather than recap a visit it can't keep. */
  stored: boolean;
}

let opened: OpenVisit | null = null;

export function openVisit(): OpenVisit {
  if (opened) return opened;
  let s: Storage | null = null;
  try {
    s = window.sessionStorage;
  } catch {
    s = null;
  }
  const topic = (document.body.dataset.visitTopic || null) as VisitTopic | null;
  const state = recordPage(loadVisit(s, Date.now()), location.pathname, topic);
  opened = { state, stored: saveVisit(s, state) };
  return opened;
}
