
import React, { useState } from 'react';
import { Fuel, Calculator } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { FuelChart } from './FuelChart';

interface VehicleOption {
  make: string;
  model: string;
  consumptionRate: number;
  fuelType: string;
}

const vehicleOptions: VehicleOption[] = [
  { make: 'Toyota', model: 'Corolla', consumptionRate: 6.5, fuelType: 'benzyna' },
  { make: 'Volkswagen', model: 'Golf', consumptionRate: 7.1, fuelType: 'benzyna' },
  { make: 'Skoda', model: 'Octavia', consumptionRate: 5.2, fuelType: 'diesel' },
  { make: 'Ford', model: 'Focus', consumptionRate: 6.8, fuelType: 'benzyna' },
  { make: 'Opel', model: 'Astra', consumptionRate: 6.3, fuelType: 'benzyna' },
  { make: 'Hyundai', model: 'i30', consumptionRate: 7.2, fuelType: 'lpg' },
  { make: 'BMW', model: '320d', consumptionRate: 5.8, fuelType: 'diesel' },
  { make: 'Audi', model: 'A4', consumptionRate: 6.0, fuelType: 'diesel' },
];

const FuelConsumptionCalculator: React.FC = () => {
  const [useKm, setUseKm] = useState(true);
  const [useLiters, setUseLiters] = useState(true);
  const [distance, setDistance] = useState('');
  const [fuelUsed, setFuelUsed] = useState('');
  const [fuelType, setFuelType] = useState('benzyna');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [consumption, setConsumption] = useState<number | null>(null);
  const [allConsumptions, setAllConsumptions] = useState<{ [key: string]: number }>({});

  const handleCalculate = () => {
    try {
      let distanceValue = parseFloat(distance);
      let fuelValue = parseFloat(fuelUsed);
      
      // Convert miles to km if needed
      if (!useKm) {
        distanceValue *= 1.60934;
      }
      
      // Convert gallons to liters if needed
      if (!useLiters) {
        fuelValue *= 3.78541;
      }
      
      // Calculate consumption in liters per 100 km
      const result = (fuelValue / distanceValue) * 100;
      
      if (isNaN(result) || !isFinite(result)) {
        toast.error("Wprowadź prawidłowe wartości do obliczeń");
        return;
      }
      
      setConsumption(parseFloat(result.toFixed(2)));
      
      // Add to comparison chart
      const updatedConsumptions = { ...allConsumptions };
      updatedConsumptions[fuelType] = parseFloat(result.toFixed(2));
      setAllConsumptions(updatedConsumptions);
      
      toast.success("Obliczono zużycie paliwa!");
    } catch (error) {
      toast.error("Wystąpił błąd podczas obliczeń");
    }
  };

  const handleSelectVehicle = (value: string) => {
    setSelectedVehicle(value);
    
    if (value !== "custom") {
      const vehicle = vehicleOptions.find(v => `${v.make} ${v.model}` === value);
      if (vehicle) {
        setFuelType(vehicle.fuelType);
        setConsumption(vehicle.consumptionRate);
        
        // Add to comparison chart
        const updatedConsumptions = { ...allConsumptions };
        updatedConsumptions[vehicle.fuelType] = vehicle.consumptionRate;
        setAllConsumptions(updatedConsumptions);
        
        toast.info(`Załadowano dane dla ${value}`);
      }
    }
  };

  return (
    <Card className="calculator-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Fuel className="h-6 w-6 text-brand-green" />
          Kalkulator Spalania Paliwa
        </CardTitle>
        <CardDescription>
          Oblicz średnie zużycie paliwa na 100 km
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Unit toggles */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex items-center space-x-2">
              <Switch 
                id="distance-unit" 
                checked={useKm}
                onCheckedChange={setUseKm}
              />
              <Label htmlFor="distance-unit">
                {useKm ? "Kilometr (km)" : "Mila (mi)"}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch 
                id="fuel-unit" 
                checked={useLiters}
                onCheckedChange={setUseLiters}
              />
              <Label htmlFor="fuel-unit">
                {useLiters ? "Litr (L)" : "Galony (gal)"}
              </Label>
            </div>
          </div>
          
          {/* Vehicle selection */}
          <div className="grid">
            <Label htmlFor="vehicle-select">Wybierz pojazd lub podaj własne dane</Label>
            <Select onValueChange={handleSelectVehicle} value={selectedVehicle}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Wybierz pojazd lub podaj własne dane" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="custom">Własne dane</SelectItem>
                {vehicleOptions.map((vehicle) => (
                  <SelectItem key={`${vehicle.make}-${vehicle.model}`} value={`${vehicle.make} ${vehicle.model}`}>
                    {vehicle.make} {vehicle.model} ({vehicle.fuelType})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Main inputs */}
          <div className="grid gap-4">
            <div className="grid">
              <Label htmlFor="distance">
                Przejechany dystans ({useKm ? "km" : "mi"})
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="ml-1 text-brand-green cursor-help">[?]</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Podaj dystans przejechany przez samochód</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="distance"
                type="number"
                placeholder="np. 350"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>
            
            <div className="grid">
              <Label htmlFor="fuel-used">
                Zużyte paliwo ({useLiters ? "L" : "gal"})
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="ml-1 text-brand-green cursor-help">[?]</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Podaj ilość paliwa zużytą w trakcie podróży</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="fuel-used"
                type="number"
                placeholder="np. 25"
                value={fuelUsed}
                onChange={(e) => setFuelUsed(e.target.value)}
              />
            </div>
            
            <div className="grid">
              <Label htmlFor="fuel-type">Rodzaj paliwa</Label>
              <Select onValueChange={setFuelType} value={fuelType}>
                <SelectTrigger>
                  <SelectValue placeholder="Wybierz rodzaj paliwa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="benzyna">Benzyna</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                  <SelectItem value="lpg">LPG</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button onClick={handleCalculate} className="w-full bg-brand-green hover:bg-brand-darkgreen">
            <Calculator className="mr-2 h-4 w-4" /> Oblicz zużycie
          </Button>
          
          {consumption !== null && (
            <div className="calculator-results">
              <h3 className="text-lg font-semibold text-brand-darkgreen">Wynik:</h3>
              <p className="text-2xl font-bold">{consumption} L/100km</p>
              
              {Object.keys(allConsumptions).length > 0 && (
                <div className="mt-4">
                  <h4 className="text-md font-semibold mb-2">Porównanie zużycia paliwa:</h4>
                  <div className="h-60">
                    <FuelChart consumptions={allConsumptions} />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FuelConsumptionCalculator;
