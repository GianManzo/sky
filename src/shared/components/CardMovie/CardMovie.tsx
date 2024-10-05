import { Card, CardContent, Typography } from "@mui/material";

export const CardMovie = ({ url }: { url: string }) => {
  return (
    <Card>
      <CardContent>
        <img src={url} alt="Movie" />
      </CardContent>
    </Card>
  );
};
