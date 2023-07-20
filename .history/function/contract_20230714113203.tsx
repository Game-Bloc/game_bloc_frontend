import { useState } from "react";
import { gamebloc } from "../index";
import { useAppDispatch } from "../redux/hooks";
import {
  TournamentType,
  addToActiveTournament,
  clearTournaments,
} from "../redux/slice/dataSlice";

export const useGetTournamentData = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [noData, setNoData] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    await gamebloc.getAllTournaments().then((data: any) => {
      if (data.tournament.length !== 0) {
        for (let i = 0; i < data.tournament.length; i++) {
          let dataArray = data.tournament[i];
          dispatch(addToActiveTournament(dataArray));
        }
        console.log(`data: ${JSON.stringify(data.tournament.length)}`);
        setLoading(false);
      } else if (data.tournament.length === 0) {
        setLoading(false);
        setNoData(true);
      }
    });
  };

  return { getData, loading, noData };
};

export const useUpdateTournament = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const array: TournamentType[] = [];
  const fetchData = async () => {
    setLoading(true);
    await gamebloc.getAllTournaments().then((data: any) => {
      if (data.tournament) {
        for (let i = 0; i < data.tournament.length; i++) {
          let dataArray = data.tournament[i];
          array.push(dataArray);
        }
        dispatch(clearTournaments());
        array.forEach((item) => {
          dispatch(addToActiveTournament(item));
          setLoading(false);
        });
      }
    });
    setLoading(false);
  };
  return { fetchData, loading };
};
