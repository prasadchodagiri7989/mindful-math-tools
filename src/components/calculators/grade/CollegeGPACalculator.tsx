import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export const CollegeGPACalculator = () => {
  const [courses, setCourses] = useState<{ grade: string; credits: number }[]>([
    { grade: "", credits: 3 },
  ]);
  const [gpa, setGpa] = useState<number | null>(null);

  const handleAddCourse = () => {
    setCourses([...courses, { grade: "", credits: 3 }]);
  };

  const handleRemoveCourse = (index: number) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
  };

  const handleGradeChange = (index: number, grade: string) => {
    const newCourses = [...courses];
    newCourses[index].grade = grade;
    setCourses(newCourses);
  };

  const handleCreditsChange = (index: number, credits: number) => {
    const newCourses = [...courses];
    newCourses[index].credits = credits;
    setCourses(newCourses);
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    const gradePoints: { [key: string]: number } = {
      A: 4.0,
      B: 3.0,
      C: 2.0,
      D: 1.0,
      F: 0.0,
    };

    courses.forEach((course) => {
      const gradePoint = gradePoints[course.grade.toUpperCase()] || 0;
      totalPoints += gradePoint * course.credits;
      totalCredits += course.credits;
    });

    if (totalCredits > 0) {
      setGpa(totalPoints / totalCredits);
    } else {
      setGpa(null);
    }
  };

  return (
    <>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/all-calculators">All Calculators</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/grade/all">Grade Calculators</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>College GPA Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">College GPA Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            {courses.map((course, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor={`course-${index}-grade`}>Grade (A, B, C, etc.)</Label>
                  <button
                    type="button"
                    onClick={() => handleRemoveCourse(index)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
                <Input
                  id={`course-${index}-grade`}
                  type="text"
                  value={course.grade}
                  onChange={(e) => handleGradeChange(index, e.target.value)}
                  maxLength={1}
                  placeholder="A, B, C, etc."
                />

                <Label htmlFor={`course-${index}-credits`}>Credits</Label>
                <Input
                  id={`course-${index}-credits`}
                  type="number"
                  value={course.credits}
                  onChange={(e) => handleCreditsChange(index, Number(e.target.value))}
                  min="1"
                  placeholder="Enter credits"
                />
              </div>
            ))}

            <Button
              variant="default"
              onClick={handleAddCourse}
              className="w-full"
            >
              Add Another Course
            </Button>

            <Button
              variant="default"
              onClick={calculateGPA}
              className="w-full mt-4"
            >
              Calculate GPA
            </Button>

            {gpa !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Your GPA is:</p>
                <p className="text-2xl font-semibold">{gpa.toFixed(2)}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the College GPA Calculator">
          <p>This calculator helps you calculate your GPA based on your course grades and credit hours.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Calculate Your GPA</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter your grade for each course (A, B, C, D, or F)</li>
            <li>Enter the credit hours for each course</li>
            <li>Click "Calculate GPA" to get your cumulative GPA</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Grade Point Scale</h4>
          <ul className="list-disc pl-5">
            <li>A = 4.0</li>
            <li>B = 3.0</li>
            <li>C = 2.0</li>
            <li>D = 1.0</li>
            <li>F = 0.0</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Course 1: Grade A, Credits 3</li>
              <li>Course 2: Grade B, Credits 4</li>
              <li>Course 3: Grade C, Credits 3</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>GPA = [(4.0 × 3) + (3.0 × 4) + (2.0 × 3)] ÷ (3 + 4 + 3)</p>
            <p>GPA = (12 + 12 + 6) ÷ 10 = 30 ÷ 10 = 3.0</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>Your GPA is 3.0</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};
