"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function ComparisonChart({ comparison }: { comparison: Array<{ fiscalYear: string; left: number; right: number }> }) {
  return (
    <div className="rounded-lg border bg-white p-4">
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={comparison}>
            <XAxis dataKey="fiscalYear" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="left" stroke="#0f766e" strokeWidth={2} />
            <Line type="monotone" dataKey="right" stroke="#334155" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 text-xs text-muted">Proxy indicator, not causal proof.</p>
    </div>
  );
}
