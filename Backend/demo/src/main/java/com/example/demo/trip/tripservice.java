package com.example.demo.trip;

import com.example.demo.station.station;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class tripservice {
    @PersistenceContext
    private EntityManager em;
    private final triprepo triprepo;
    @Autowired
    public tripservice(com.example.demo.trip.triprepo triprepo) {
        this.triprepo = triprepo;
    }


    public List<trip> getalltrips()
    {
        return  triprepo.findAll();
    }


    public String addtrip(trip s) {

        triprepo.save(s);
        return "Trip added successfully";
        }



    public Optional<trip> gettripbyId(int id) {
        return triprepo.findById(id);
    }



    public String deletetripByid(int id)
    {
        triprepo.deleteById(id);
        return  "Trip with id : "+ id+ " deleted successfully";
    }
    @Transactional
    public String updatetripByid(int id, String start_time, String end_time, String name, station from_station, station to_station)
    {


        trip t = triprepo.searchbyid(id);
        if(name != null && !Objects.equals(t.getName(),name))
     {
         t.setName(name);
     }
        if(start_time != null && !Objects.equals(t.getStart_time(),start_time))
        {
            t.setStart_time(start_time);
        }
        if(end_time != null && !Objects.equals(t.getEnd_time(),end_time))
        {
            t.setEnd_time(end_time);
        }
        if(from_station != null && !Objects.equals(t.getFrom_station(),from_station))
        {
            t.setFrom_station(from_station);
        }
        if(to_station != null && !Objects.equals(t.getTo_station(),to_station))
        {
            t.setTo_station(to_station);
        }


        return  "Trip with id : "+ id+ " updated successfully";
    }


}

