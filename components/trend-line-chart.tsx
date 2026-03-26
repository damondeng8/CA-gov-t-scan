"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function TrendLineChart({ series, title }: { series: Array<{ fiscalYear: string; value: number }>; title: string }) {
  return (
    <section className="rounded-lg border bg-white p-4">
      <h2 className="font-semibold">{title}</h2>
      <div className="mt-4 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={series}>
            <XAxis dataKey="fiscalYear" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#0f766e" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 text-xs text-muted">Source: GC InfoBase. Last updated: 2026-03-25.</p>
    </section>
  );
}
