package com.example.demo.trip;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "app/trip")
public class tripcontroller {

    private final tripservice tripservice ;
    @Autowired
    public tripcontroller(tripservice tripservice) {
        this.tripservice = tripservice;
    }

    @GetMapping
    public List<trip> hello()
    {
        return  tripservice.getalltrips();
    }

    @RequestMapping(method = RequestMethod.POST)
    public String addtrip(@RequestBody trip s)
    {

        return tripservice.addtrip(s);


    }
    @GetMapping(path = "/searchbyId/{id}" )
    public Optional<trip> searchbyId(@PathVariable int id)

    {
        return  tripservice.gettripbyId(id);
    }


    @DeleteMapping(path ="/deletebyId/{idd}")
    public String deletebyId(@PathVariable int idd)

    {
        return tripservice.deletetripByid(idd);
    }

}
