"use client";
import TopicsList from "@/components/TopicsList";
import Button from "@mui/material/Button";

const getdata = () => {
  alert("Hello I am Material Ui Button");
};

export default function Home() {
  return (
    <>
      <TopicsList />
      <Button onClick={getdata} variant="contained">
        Contained
      </Button>
    </>
  );
}
