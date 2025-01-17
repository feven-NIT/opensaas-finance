import { requireNodeEnvVar } from '../server/utils';

export type SubscriptionStatus = 'past_due' | 'cancel_at_period_end' | 'active' | 'deleted';

export enum PaymentPlanId {
  BreakIntoInterviews = 'break_into_interviews',
  InterviewsMaster = 'interviews_master',
  ModellingMaster = 'modelling_master',
}

export interface PaymentPlan {
  getPaymentProcessorPlanId: () => string;
  effect: PaymentPlanEffect;
}

export type PaymentPlanEffect = { kind: 'subscription' } | { kind: 'credits'; amount: number };

export const paymentPlans: Record<PaymentPlanId, PaymentPlan> = {
  [PaymentPlanId.BreakIntoInterviews]: {
    getPaymentProcessorPlanId: () => requireNodeEnvVar('PAYMENTS_BREAK_INTO_INTERVIEWS_PLAN_ID'),
    effect: { kind: 'credits', amount: 1 },
  },
  [PaymentPlanId.InterviewsMaster]: {
    getPaymentProcessorPlanId: () => requireNodeEnvVar('PAYMENTS_INTERVIEWS_MASTER_PLAN_ID'),
    effect: { kind: 'credits', amount: 2 },
  },
  [PaymentPlanId.ModellingMaster]: {
    getPaymentProcessorPlanId: () => requireNodeEnvVar('PAYMENTS_MODELLING_MASTER_PLAN_ID'),
    effect: { kind: 'credits', amount: 3 },
  },
};

export function prettyPaymentPlanName(planId: PaymentPlanId): string {
  const planToName: Record<PaymentPlanId, string> = {
    [PaymentPlanId.BreakIntoInterviews]: 'Pack Break Into Interviews',
    [PaymentPlanId.InterviewsMaster]: 'Pack Interviews Master',
    [PaymentPlanId.ModellingMaster]: 'Pack Modelling Master',
  };
  return planToName[planId];
}

export function parsePaymentPlanId(planId: string): PaymentPlanId {
  if ((Object.values(PaymentPlanId) as string[]).includes(planId)) {
    return planId as PaymentPlanId;
  } else {
    throw new Error(`Invalid PaymentPlanId: ${planId}`);
  }
}

export function getSubscriptionPaymentPlanIds(): PaymentPlanId[] {
  return Object.values(PaymentPlanId).filter((planId) => paymentPlans[planId].effect.kind === 'subscription');
}
