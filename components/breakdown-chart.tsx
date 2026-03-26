"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function BreakdownChart({ data }: { data: Array<{ name: string; value: number }> }) {
  return (
    <section className="rounded-lg border bg-white p-4">
      <h2 className="font-semibold">Spending breakdown</h2>
      <div className="mt-4 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#0f766e" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 text-xs text-muted">Method note: Values shown in nominal CAD millions.</p>
    </section>
  );
}
