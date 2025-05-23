import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const AmpsToKVAGuide: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-4">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/electrical-calculations">Electrical Calculations</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Amps to kVA Guide</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-white shadow-lg dark:bg-gray-900 dark:text-gray-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Amps to kVA (Kilovolt-Amperes) Conversion – The Complete Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-base text-gray-700 leading-relaxed dark:text-gray-300">
          <p>
            Electric power systems, both commercial and industrial, are often rated in kilovolt-amperes (kVA)
            rather than in kilowatts (kW). Understanding how to convert Amps (A) to kVA is essential for
            electrical engineers, technicians, and anyone working with transformers, generators, or electrical
            load planning. This comprehensive guide explains the concepts behind amps and kVA, shows you how
            to convert them correctly, and includes real-world examples, charts, and FAQs to help you apply
            the knowledge confidently.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">🔌 What is an Ampere (Amp or A)?</h2>
          <p>
            An Ampere is the standard unit of electrical current. It measures how much electric charge is
            flowing through a conductor per second. In practical terms, when we say a motor draws 50 amps,
            we mean 50 units of electrical current are passing through the motor's wiring every second.
          </p>
          <p>
            Amps are measured using devices like ammeters or clamp meters and are used in both AC
            (alternating current) and DC (direct current) circuits.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">⚡ What is Kilovolt-Ampere (kVA)?</h2>
          <p>
            A kilovolt-ampere (kVA) is a unit of apparent power in an AC electrical system. Apparent power
            combines two components:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Real power (kW) – does the actual work</li>
            <li>Reactive power (kVAR) – creates magnetic fields needed for inductive loads like motors</li>
          </ul>
          <p>
            kVA reflects the total power demand on a system. It doesn't factor in the efficiency of the
            system; instead, it represents the combined total of real and reactive power.
          </p>
          <p className="font-semibold">1 kVA = 1000 volt-amperes (VA)</p>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">⚖️ kVA vs. kW: What’s the Difference?</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 dark:border-gray-600">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Metric</th>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Description</th>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Includes Efficiency?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b dark:border-gray-600">kW</td>
                  <td className="px-4 py-2 border-b dark:border-gray-600">Real Power</td>
                  <td className="px-4 py-2 border-b dark:border-gray-600">✅ Yes (includes PF)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b dark:border-gray-600">kVA</td>
                  <td className="px-4 py-2 border-b dark:border-gray-600">Apparent Power</td>
                  <td className="px-4 py-2 border-b dark:border-gray-600">❌ No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">kVAR</td>
                  <td className="px-4 py-2">Reactive Power</td>
                  <td className="px-4 py-2">❌ No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2">Power Factor (PF) is what links them:</p>
          <div className="bg-gray-100 p-3 rounded-md dark:bg-gray-800 dark:text-gray-200">
            <code className="text-sm">kW = kVA × PF</code>
          </div>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">🔁 Amps to kVA: The Conversion Formula</h2>
          <p>To convert Amps to kVA, you must know:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Voltage (V)</li>
            <li>Number of phases (single-phase or three-phase)</li>
            <li>Power Factor (PF, optional — only needed if you're converting to kW)</li>
          </ul>

          <div>
            <h3 className="text-lg font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">✅ For Single-Phase AC Systems</h3>
            <div className="bg-gray-100 p-3 rounded-md dark:bg-gray-800 dark:text-gray-200">
              <code className="text-sm">kVA = (Amps × Volts) / 1000</code>
            </div>
            <p className="mt-2 font-semibold">Example:</p>
            <p>A motor runs at 240V and draws 20A.</p>
            <div className="bg-gray-200 p-3 rounded-md mt-1 dark:bg-gray-700 dark:text-gray-200">
              <p><code className="text-sm">kVA = (20A × 240V) / 1000 = 4.8 kVA</code></p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">✅ For Three-Phase AC Systems</h3>
            <div className="bg-gray-100 p-3 rounded-md dark:bg-gray-800 dark:text-gray-200">
              <code className="text-sm">kVA = (√3 × Amps × Volts) / 1000</code>
            </div>
            <p className="mt-1"><code className="text-sm">√3 ≈ 1.732</code></p>
            <p className="mt-2 font-semibold">Example:</p>
            <p>You have a three-phase motor drawing 100A at 400V.</p>
            <div className="bg-gray-200 p-3 rounded-md mt-1 dark:bg-gray-700 dark:text-gray-200">
              <p><code className="text-sm">kVA = (1.732 × 100A × 400V) / 1000 = 69.28 kVA</code></p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">✅ For DC Systems</h3>
            <p>While kVA is not commonly used in DC systems, you can treat VA like Watts in DC:</p>
            <div className="bg-gray-100 p-3 rounded-md dark:bg-gray-800 dark:text-gray-200">
              <code className="text-sm">kVA = (Amps × Volts) / 1000</code>
            </div>
            <p className="mt-1">Note: In DC, kW and kVA are effectively the same, because there’s no power factor involved.</p>
          </div>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">🧠 Why kVA Matters</h2>
          <p>Many electrical devices like transformers, generators, and UPS systems are rated in kVA because:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>They must handle both real and reactive power.</li>
            <li>kVA rating ensures the total load capacity is considered.</li>
            <li>It provides a universal measure regardless of the load type.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">🔍 Real-World Amps to kVA Conversion Examples</h2>
          <div>
            <h4 className="text-md font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">Example 1: Office UPS Load (Single-Phase)</h4>
            <p>Voltage = 230V</p>
            <p>Load Current = 12A</p>
            <div className="bg-gray-200 p-3 rounded-md mt-1 dark:bg-gray-700 dark:text-gray-200">
              <p><code className="text-sm">kVA = (12A × 230V) / 1000 = 2.76 kVA</code></p>
            </div>
          </div>
          <div>
            <h4 className="text-md font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">Example 2: Industrial Pump (Three-Phase)</h4>
            <p>Voltage = 415V</p>
            <p>Current = 85A</p>
            <div className="bg-gray-200 p-3 rounded-md mt-1 dark:bg-gray-700 dark:text-gray-200">
              <p><code className="text-sm">kVA = (1.732 × 85A × 415V) / 1000 ≈ 61.18 kVA</code></p>
            </div>
          </div>
          <div>
            <h4 className="text-md font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">Example 3: Backup Generator (Single-Phase)</h4>
            <p>Voltage = 240V</p>
            <p>Load = 50A</p>
            <div className="bg-gray-200 p-3 rounded-md mt-1 dark:bg-gray-700 dark:text-gray-200">
              <p><code className="text-sm">kVA = (50A × 240V) / 1000 = 12 kVA</code></p>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">📊 Amps to kVA Table (Single-Phase, 240V)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 dark:border-gray-600">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Amps</th>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">kVA</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { amps: 5, kva: 1.2 }, { amps: 10, kva: 2.4 }, { amps: 15, kva: 3.6 },
                  { amps: 20, kva: 4.8 }, { amps: 25, kva: 6.0 }, { amps: 30, kva: 7.2 },
                  { amps: 40, kva: 9.6 }, { amps: 50, kva: 12.0 }
                ].map(row => (
                  <tr key={row.amps}>
                    <td className="px-4 py-2 border-b dark:border-gray-600">{row.amps}</td>
                    <td className="px-4 py-2 border-b dark:border-gray-600">{row.kva.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">📊 Amps to kVA Table (Three-Phase, 415V)</h2>
           <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 dark:border-gray-600">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Amps</th>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">kVA</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { amps: 10, kva: 7.18 }, { amps: 20, kva: 14.36 }, { amps: 30, kva: 21.54 },
                  { amps: 40, kva: 28.72 }, { amps: 50, kva: 35.90 }, { amps: 60, kva: 43.08 },
                  { amps: 70, kva: 50.26 }, { amps: 80, kva: 57.44 }, { amps: 100, kva: 71.80 }
                ].map(row => (
                  <tr key={row.amps}>
                    <td className="px-4 py-2 border-b dark:border-gray-600">{row.amps}</td>
                    <td className="px-4 py-2 border-b dark:border-gray-600">{row.kva.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">⚠️ Common Mistakes in Amps to kVA Conversion</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>❌ Ignoring the number of phases – Always confirm if it’s single or three-phase.</li>
            <li>❌ Using kVA as a substitute for kW – Remember, kVA ≠ actual power used.</li>
            <li>❌ Forgetting to divide by 1000 – kVA is 1000 times greater than VA.</li>
            <li>❌ Using incorrect voltage – Always use the RMS voltage for AC calculations.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">🛠️ Practical Use-Cases of Amps to kVA Conversion</h2>
          <div>
            <h4 className="text-md font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">🏭 Industrial Electrical Design</h4>
            <ul className="list-disc ml-6 space-y-1">
                <li>Used to determine transformer and cable sizes.</li>
                <li>Prevents overloading equipment.</li>
            </ul>
          </div>
           <div>
            <h4 className="text-md font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">🔌 Generator Sizing</h4>
            <ul className="list-disc ml-6 space-y-1">
                <li>Generators are rated in kVA.</li>
                <li>Helps match electrical loads with appropriate generator capacity.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">🖥️ UPS and Backup Power</h4>
            <ul className="list-disc ml-6 space-y-1">
                <li>Sizing UPS for critical systems requires knowing apparent load in kVA.</li>
            </ul>
          </div>
           <div>
            <h4 className="text-md font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">⚡ Energy Audits</h4>
            <ul className="list-disc ml-6 space-y-1">
                <li>Total kVA load is used to evaluate system performance and reactive load impact.</li>
            </ul>
          </div>


          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">❓ Frequently Asked Questions</h2>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Q1: Can I convert amps to kVA without knowing voltage?</h4>
              <p>A: No. Voltage is essential for calculating power. Without it, conversion is not possible.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Q2: Is power factor required for Amps to kVA?</h4>
              <p>A: No. Power factor is required only when converting kVA to kW or Amps to kW. Amps to kVA only needs voltage and phase type.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Q3: Why is my generator rated in kVA, not kW?</h4>
              <p>A: Because generators must handle both real and reactive power. kVA rating covers total capacity, regardless of power factor.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Q4: What’s the difference between VA and kVA?</h4>
              <p>A: 1 kVA = 1000 VA. VA is often used in small electronics; kVA is used in large equipment ratings.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Q5: How do I find the amperage if I only know kVA?</h4>
              <p>A: Use the reverse formula:</p>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Single-Phase: <code className="text-sm bg-gray-100 dark:bg-gray-800 p-1 rounded">Amps = (kVA × 1000) / Voltage</code></li>
                <li>Three-Phase: <code className="text-sm bg-gray-100 dark:bg-gray-800 p-1 rounded">Amps = (kVA × 1000) / (√3 × Voltage)</code></li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">🧾 Summary Chart</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 dark:border-gray-600">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">System Type</th>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Formula</th>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b dark:border-gray-600">DC</td>
                  <td className="px-4 py-2 border-b dark:border-gray-600"><code className="text-sm">kVA = (A × V) / 1000</code></td>
                  <td className="px-4 py-2 border-b dark:border-gray-600">Same as kW in DC</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b dark:border-gray-600">Single-Phase AC</td>
                  <td className="px-4 py-2 border-b dark:border-gray-600"><code className="text-sm">kVA = (A × V) / 1000</code></td>
                  <td className="px-4 py-2 border-b dark:border-gray-600">No PF needed</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Three-Phase AC</td>
                  <td className="px-4 py-2"><code className="text-sm">kVA = (√3 × A × V) / 1000</code></td>
                  <td className="px-4 py-2">√3 ≈ 1.732</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">✅ Final Thoughts</h2>
          <p>
            Understanding how to convert Amps to kVA is fundamental for electrical design, maintenance, and
            load planning. Whether you’re working on a commercial UPS system, sizing a generator, or laying
            out a new electrical panel, this knowledge ensures safety, efficiency, and reliability.
          </p>
          <p className="mt-2">Always remember:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Know your voltage.</li>
            <li>Know your system type (single or three-phase).</li>
            <li>Use the correct formula.</li>
          </ul>
          <div className="space-y-6">
  <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">🧠 Why kVA Matters</h2>
  <p>Many electrical devices like transformers, generators, and UPS systems are rated in kVA because:</p>
  <ul className="list-disc ml-6 space-y-1">
    <li>They must handle both real and reactive power.</li>
    <li>kVA rating ensures the total load capacity is considered.</li>
    <li>It provides a universal measure regardless of the load type.</li>
  </ul>

  <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">🔍 Real-World Amps to kVA Conversion Examples</h2>
  <div>
    <h4 className="text-md font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">Example 1: Office UPS Load (Single-Phase)</h4>
    <p>Voltage = 230V</p>
    <p>Load Current = 12A</p>
    <div className="bg-gray-200 p-3 rounded-md mt-1 dark:bg-gray-700 dark:text-gray-200">
      <p><code className="text-sm">kVA = (12A × 230V) / 1000 = 2.76 kVA</code></p>
    </div>
  </div>
  <div>
    <h4 className="text-md font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">Example 2: Industrial Pump (Three-Phase)</h4>
    <p>Voltage = 415V</p>
    <p>Current = 85A</p>
    <div className="bg-gray-200 p-3 rounded-md mt-1 dark:bg-gray-700 dark:text-gray-200">
      <p><code className="text-sm">kVA = (1.732 × 85A × 415V) / 1000 ≈ 61.18 kVA</code></p>
    </div>
  </div>
  <div>
    <h4 className="text-md font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">Example 3: Backup Generator (Single-Phase)</h4>
    <p>Voltage = 240V</p>
    <p>Load = 50A</p>
    <div className="bg-gray-200 p-3 rounded-md mt-1 dark:bg-gray-700 dark:text-gray-200">
      <p><code className="text-sm">kVA = (50A × 240V) / 1000 = 12 kVA</code></p>
    </div>
  </div>

  <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">📊 Amps to kVA Table (Single-Phase, 240V)</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300 dark:border-gray-600">
      <thead className="bg-gray-100 dark:bg-gray-800">
        <tr>
          <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Amps</th>
          <th className="px-4 py-2 border-b dark:border-gray-600 text-left">kVA</th>
        </tr>
      </thead>
      <tbody>
        {[
          { amps: 5, kva: 1.2 }, { amps: 10, kva: 2.4 }, { amps: 15, kva: 3.6 },
          { amps: 20, kva: 4.8 }, { amps: 25, kva: 6.0 }, { amps: 30, kva: 7.2 },
          { amps: 40, kva: 9.6 }, { amps: 50, kva: 12.0 }
        ].map(row => (
          <tr key={row.amps}>
            <td className="px-4 py-2 border-b dark:border-gray-600">{row.amps}</td>
            <td className="px-4 py-2 border-b dark:border-gray-600">{row.kva.toFixed(1)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">📊 Amps to kVA Table (Three-Phase, 415V)</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300 dark:border-gray-600">
      <thead className="bg-gray-100 dark:bg-gray-800">
        <tr>
          <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Amps</th>
          <th className="px-4 py-2 border-b dark:border-gray-600 text-left">kVA</th>
        </tr>
      </thead>
      <tbody>
        {[
          { amps: 10, kva: 7.18 }, { amps: 20, kva: 14.36 }, { amps: 30, kva: 21.54 },
          { amps: 40, kva: 28.72 }, { amps: 50, kva: 35.90 }, { amps: 60, kva: 43.08 },
        ].map(row => (
          <tr key={row.amps}>
            <td className="px-4 py-2 border-b dark:border-gray-600">{row.amps}</td>
            <td className="px-4 py-2 border-b dark:border-gray-600">{row.kva.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
<div className="space-y-6">
 
  <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">⚡ Why is Understanding kVA Important?</h2>
  <p>When dealing with electrical equipment, the need to understand the relationship between Amps and kVA arises in several situations:</p>
  <ul className="list-disc ml-6 space-y-1">
    <li><strong>Power System Design:</strong> Engineers use kVA ratings to determine the size of transformers, generators, and cables required for a specific electrical load.</li>
    <li><strong>Energy Efficiency:</strong> Knowing how much energy equipment consumes helps reduce losses and improve system efficiency.</li>
    <li><strong>Load Management:</strong> Correctly sizing equipment and ensuring the load is balanced between devices is critical for maintaining system stability and longevity.</li>
  </ul>

 
  <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">🔄 How to Convert kVA to Amps</h2>
  <p>In some cases, you might need to go the other way around—converting kVA to Amps. The formula for this is:</p>
  <div className="bg-gray-200 p-3 rounded-md mt-1 dark:bg-gray-700 dark:text-gray-200">
    <code className="text-sm">Amps = (kVA × 1000) / Voltage</code>
  </div>
  <p>For three-phase systems, the formula becomes:</p>
  <div className="bg-gray-200 p-3 rounded-md mt-1 dark:bg-gray-700 dark:text-gray-200">
    <code className="text-sm">Amps = (kVA × 1000) / (Voltage × 1.732)</code>
  </div>
  
  <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-800 dark:text-gray-200">Example: Converting kVA to Amps (Single-Phase)</h3>
  <p>If you have a load of 5 kVA and a voltage of 240V:</p>
  <div className="bg-gray-200 p-3 rounded-md mt-1 dark:bg-gray-700 dark:text-gray-200">
    <p><code className="text-sm">Amps = (5 kVA × 1000) / 240V = 20.83 Amps</code></p>
  </div>


  <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">⚠️ Common Mistakes When Converting kVA to Amps</h2>
  <p>While the formulas seem straightforward, here are some common mistakes to avoid:</p>
  <ul className="list-disc ml-6 space-y-1">
    <li><strong>Forgetting to account for the phase:</strong> Using the wrong phase (single-phase vs. three-phase) can lead to incorrect calculations.</li>
    <li><strong>Confusing Voltage Ratings:</strong> Ensure you use the correct voltage rating for your system. Voltage can differ depending on location (e.g., 240V in North America vs. 415V in many parts of Europe).</li>
    <li><strong>Overlooking Power Factor:</strong> In many real-world applications, power factor should also be considered, especially for three-phase systems. A low power factor can cause discrepancies in expected load capacity.</li>
  </ul>

  <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">💡 Practical Use Cases</h2>
  <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-800 dark:text-gray-200">1. Sizing Electrical Transformers</h3>
  <p>When designing or replacing electrical transformers, engineers use kVA ratings to match the transformer's output with the system's load demand. By converting between kVA and Amps, they can ensure that transformers are not under or over-sized, which helps avoid costly damages and inefficiencies.</p>

  <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-800 dark:text-gray-200">2. Generators for Backup Power</h3>
  <p>For backup generators, it's crucial to know the kVA rating to match the required load. For instance, if an office needs 5 kVA of backup power, the generator must have a sufficient rating to avoid overloads. Converting from Amps to kVA helps determine the exact generator size needed.</p>

  <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-800 dark:text-gray-200">3. Electrical Panel Sizing</h3>
  <p>Electrical panels must be properly sized to handle the total current drawn from all connected devices. Converting Amps to kVA is essential for panel designers to ensure that the panel can support the required power load without overloading or wasting energy.</p>

 
  <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">❓ Frequently Asked Questions</h2>
  <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-800 dark:text-gray-200">1. What is the difference between kVA and kW?</h3>
  <p>kVA (kilovolt-amperes) represents the apparent power, while kW (kilowatts) represents the real power consumed by a device. The difference lies in the power factor (pf), which is the ratio of real power to apparent power. The formula is:</p>
  <div className="bg-gray-200 p-3 rounded-md mt-1 dark:bg-gray-700 dark:text-gray-200">
    <code className="text-sm">kW = kVA × pf</code>
  </div>

  <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-800 dark:text-gray-200">2. Can I convert Amps directly to kVA?</h3>
  <p>Yes, but you need to know the voltage and the phase (single-phase or three-phase) of the electrical system. The formula will differ based on whether you're dealing with single-phase or three-phase systems.</p>

  <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-800 dark:text-gray-200">3. Why do we need to know both kVA and Amps?</h3>
  <p>Knowing both kVA and Amps gives a clearer understanding of a system's total power requirements and how much current is required to support it. This is crucial when designing, installing, or replacing electrical systems, ensuring safe operation, and preventing overloads.</p>

</div>
<div className="space-y-6">
  <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">🔚 Conclusion</h2>
  <p>Understanding the relationship between Amps and kVA is crucial for anyone working with electrical systems, whether you're designing power systems, selecting equipment, or troubleshooting electrical issues. By knowing how to convert between these two units, you can ensure that your devices are properly sized, energy-efficient, and safe to operate.</p>

  <p>The kVA rating of equipment helps determine its capacity to handle both real and reactive power, while Amps indicate the current being drawn by the system. These two measurements are fundamental in sizing transformers, generators, electrical panels, and backup power systems. Converting between them allows for precise calculations, preventing overloading or underutilizing equipment, which can lead to inefficiency or damage.</p>

  <p>In conclusion, mastering kVA and Amps conversions is essential for ensuring optimal performance, reliability, and safety in electrical installations. Whether you're an engineer, technician, or DIY enthusiast, understanding these conversions helps you make informed decisions and manage electrical systems more effectively.</p>
</div>

        </CardContent>
      </Card>
    </div>
  );
};

export default AmpsToKVAGuide;