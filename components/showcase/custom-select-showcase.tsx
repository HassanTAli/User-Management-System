"use client";

import { useState } from "react";
import Select, { SelectOption } from "../atoms/custom-select";
import { useUsers } from "@/hooks/use-users";
import { useCountries } from "@/hooks/use-countries";

export default function FormPage() {
  // Gender (Static)
  const [gender, setGender] = useState<SelectOption | null>(null);
  const genderOptions: SelectOption[] = [
    { id: "male", name: "Male" },
    { id: "female", name: "Female" },
  ];

  // Interests (Multi-select max 3)
  const [interests, setInterests] = useState<SelectOption[]>([]);
  const interestOptions: SelectOption[] = [
    { id: 1, name: "Sports" },
    { id: 2, name: "Music" },
    { id: 3, name: "Reading" },
    { id: 4, name: "Gaming" },
    { id: 5, name: "Cooking" },
    { id: 6, name: "Travel" },
    { id: 7, name: "Photography" },
    { id: 8, name: "Art" },
  ];

  // Category (Frontend Search)
  const [category, setCategory] = useState<SelectOption | null>(null);
  const categoryOptions: SelectOption[] = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Business" },
    { id: 3, name: "Health" },
    { id: 4, name: "Education" },
    { id: 5, name: "Entertainment" },
    { id: 6, name: "Science" },
    { id: 7, name: "Politics" },
    { id: 8, name: "Sports" },
  ];

  // Tags (Multi-select with Search)
  const [tags, setTags] = useState<SelectOption[]>([]);
  const tagOptions: SelectOption[] = [
    { id: 1, name: "React" },
    { id: 2, name: "Vue" },
    { id: 3, name: "Angular" },
    { id: 4, name: "Next.js" },
    { id: 5, name: "TypeScript" },
    { id: 6, name: "JavaScript" },
    { id: 7, name: "Python" },
    { id: 8, name: "Node.js" },
    { id: 9, name: "GraphQL" },
    { id: 10, name: "REST API" },
  ];

  // Country (Async with Pagination)
  const [country, setCountry] = useState<SelectOption | null>(null);
  const [countryPage, setCountryPage] = useState(1);
  const [countrySearch, setCountrySearch] = useState("");
  const { data: countriesData, isLoading: countriesLoading } = useCountries(
    countrySearch,
    countryPage
  );

  const countryOptions: SelectOption[] = countriesData?.countries || [];
  const hasMoreCountries = countryPage < (countriesData?.totalPages || 0);

  // Users (Async with Search)
  const [assignedUser, setAssignedUser] = useState<SelectOption | null>(null);
  const [userPage, setUserPage] = useState(1);
  const [userSearch, setUserSearch] = useState("");
  const { data: usersData, isLoading: usersLoading } = useUsers(
    userSearch,
    userPage
  );

  const userOptions: SelectOption[] = usersData?.users || [];
  const hasMoreUsers = userPage < (usersData?.totalPages || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      gender,
      interests,
      category,
      tags,
      country,
      assignedUser,
    });
  };

  return (
    <div className="my-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Custom Select Components</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-x-8"
      >
        {/* Gender - Static */}
        <Select
          label="Gender"
          required
          options={genderOptions}
          value={gender}
          onChange={(val) => setGender(val as SelectOption)}
          placeholder="Select gender"
          message={`Selected: ${gender?.name ?? "None"}`}
        />

        {/* Interests - Multi-select max 3 */}
        <Select
          label="Interests"
          multi
          maxSelections={3}
          options={interestOptions}
          value={interests}
          onChange={(val) => setInterests(val as SelectOption[])}
          placeholder="Select up to 3 interests"
          message={`Selected: ${interests.length} of ${interestOptions.length}`}
        />

        {/* Category - Frontend Search */}
        <Select
          label="Category"
          searchable
          options={categoryOptions}
          value={category}
          onChange={(val) => setCategory(val as SelectOption)}
          placeholder="Search and select category"
        />

        {/* Tags - Multi-select with Search */}
        <Select
          label="Tags"
          multi
          searchable
          options={tagOptions}
          value={tags}
          onChange={(val) => setTags(val as SelectOption[])}
          placeholder="Search and select tags"
        />

        {/* Country - Async with Pagination */}
        <Select
          label="Country"
          async
          searchable
          options={countryOptions}
          value={country}
          onChange={(val) => setCountry(val as SelectOption)}
          onSearch={setCountrySearch}
          onLoadMore={() => setCountryPage((p) => p + 1)}
          hasMore={hasMoreCountries}
          loading={countriesLoading}
          placeholder="Search countries"
        />

        {/* Assign to User - Async with Search */}
        <Select
          label="Assign to User"
          async
          searchable
          options={userOptions}
          value={assignedUser}
          onChange={(val) => setAssignedUser(val as SelectOption)}
          onSearch={(query) => {
            setUserSearch(query);
            setUserPage(1);
          }}
          onLoadMore={() => setUserPage((p) => p + 1)}
          hasMore={hasMoreUsers}
          loading={usersLoading}
          placeholder="Search users by name or email"
        />
      </form>
    </div>
  );
}
