package com.example.demo.station;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "app/station")
public class stationController {

    private final stationservice stationservice ;
    @Autowired
    public stationController(stationservice stationservice) {
        this.stationservice = stationservice;
    }

    @GetMapping
    public List<station> hello()
    {
        return  stationservice.getallstations();
    }

    @RequestMapping(method = RequestMethod.POST)
    public String addstation(@RequestBody station s)
    {

        return stationservice.addstation(s);


    }
    @GetMapping(path = "/searchbyId/{id}" )
    public Optional<station> searchbyId(@PathVariable int id)

    {
        return  stationservice.getstationbyId(id);
    }
    @GetMapping(path = "/searchbyname/{name}" )
    public Optional<station> searchbyname(@PathVariable String name)

    {
        return  stationservice.getstationbyname(name);
    }
    @DeleteMapping(path = "/deletebyId/{id}")
    public String deletebyId(@PathVariable int id)

    {
        return stationservice.deletestationByid(id);
    }

}
